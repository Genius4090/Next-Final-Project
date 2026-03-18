import { Footer, TopHeader } from "@/modules";
export default function MainLayout({children,}:{children: React.ReactNode;}) {
  return (
    <>
      <TopHeader />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}