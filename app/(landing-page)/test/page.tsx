import * as React from "react";
import { SectionContainer } from "@/components/layout";
import { db } from "@/config/firebase";
import { collection, getDocs } from "firebase/firestore";

type TUser = {
  name: string;
  email: string;
};

const TestSecretPage = async () => {
  const userRef = collection(db, "users");
  const res = await getDocs(userRef);
  const user = res.docs.map((doc) => ({ ...doc.data() })) as TUser[];
  if (!user) {
    <p>user not found!</p>;
  }

  return <SectionContainer>halo bang {user[0].name}</SectionContainer>;
};

export default TestSecretPage;
