import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/logo.jfif" alt="banner" width={1000} height={1000} className="w-screen" />
      <Collections />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";

