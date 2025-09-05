import { useRouter } from "next/router";

const StockDetails = () => {
  const router = useRouter();
  const { symbol } = router.query;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Stock Details--{symbol}</h1>
      <p> all details{symbol}</p>
    </div>
  );
};

export default StockDetails;
