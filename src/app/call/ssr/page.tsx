const getRandomNumber = async () => {
  const response = await fetch('http://localhost:3000/api/random', {
    cache: 'no-store'
  })
  const data = await response.json()
  return data
}

export default async function SSR() {
  const { random }: any = await getRandomNumber()
  
  return (
    <main>
      <h2 className="font-bold">{random}</h2>
    </main>
  );
}
