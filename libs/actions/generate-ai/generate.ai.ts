"use server";
import { auth } from "@/libs/auth";
import { baseApiUrl, TFeatureAISchema } from "@/libs/entities";

export const generateAI = async ({
  productCategory,
  featureName,
  prompt,
  maxToken,
  productName,
}: TFeatureAISchema) => {
  const session = await auth();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }

  const response = await fetch(`${baseApiUrl}/api/send-prompt`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      categoryprompt: productCategory,
      featuresname: featureName,
      prompt: prompt,
      max_words: maxToken,
      brandName: productName,
    }),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const reader = response.body ? response.body.getReader() : null;
  if (!reader) {
    throw new Error("Response body is null, unable to read stream.");
  }

  let { value, done } = await reader.read();
  const decoder = new TextDecoder("utf-8");
  let resultText = ""; // Final message to store for logging

  while (!done) {
    const chunk = decoder.decode(value, { stream: true });
    const messages = chunk.match(/{.*?}/g); // Match JSON objects
    if (messages) {
      messages.forEach((message) => {
        const msgObj = JSON.parse(message);

        // Only show each word, not the final message
        if (!msgObj.success) {
          resultText += msgObj.message + " "; // Append the message content
        } else {
          // Store the final combined message for logging (don't show in UI)
          resultText = msgObj.message;
        }
      });
    }

    ({ value, done } = await reader.read());
  }

  return resultText;
};
