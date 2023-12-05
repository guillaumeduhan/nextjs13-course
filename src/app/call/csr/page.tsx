"use client";

import { useEffect, useState } from "react";

export default function CSR() {
  const [num, setNum] = useState(null)
  
  const call = async () => {
    const response = await fetch('http://localhost:3000/api/random', {
      cache: 'no-store'
    })
    const {random} = await response.json()
    setNum(random)
  }

  useEffect(() => {
    call()
  }, [])
  
  return (
    <main>
      <h2 className="font-bold">Call page</h2>
      <p>{num}</p>
    </main>
  );
}
