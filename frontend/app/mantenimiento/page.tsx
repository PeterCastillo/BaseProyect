"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  const { data } = useSession();

  const handleUsuarios = async () => {
    if (data) {
      const res = await fetch("http://localhost:8000/sucursales", {
        headers: {
          Authorization: `Bearer ${data.user.token}`,
        },
      });
      const nose = await res.json();
      console.log(nose);
      console.log(data);
    }
  };

  // console.log(data)
  return (
    <div>
    </div>
  );
}
