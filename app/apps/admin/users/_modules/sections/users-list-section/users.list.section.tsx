'use client'
import * as React from "react";
import { Users2Icon } from "lucide-react";
import { HeadingWithIcon } from "@/components/dashboard-page";
import { Separator } from "@/components/ui/separator";
import { UsersTable } from "./users.table";
import { userColumns } from "./users.columns";
import { TUserAdminDashboard } from "@/libs/actions/users/type";
import { getAllUsers } from "@/libs/actions";

export const UsersListSection: React.FC = (): React.ReactElement => {
  const [userData,setUserData]=React.useState<TUserAdminDashboard[]>([])
  
  const fetchData = React.useCallback(async ()=>{
    const userData = await getAllUsers()
    setUserData(userData)
  },[])

  React.useEffect(()=>{
    fetchData()
  },[fetchData])

  return (
    <section className="p-4 md:p-6 space-y-6 rounded-md bg-neutral-50">
      <HeadingWithIcon
        icon={<Users2Icon size={32} />}
        text="Semua Pengguna KontenKilat"
      />
      <p className="text-sm md:text-base font-normal text-muted-foreground">
        Semua pengguna yang terdaftar di aplikasi KontenKilat.
      </p>
      <Separator />
      <UsersTable columns={userColumns} data={userData} />
    </section>
  );
};
