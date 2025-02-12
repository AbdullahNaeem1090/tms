
import { Sidebar } from "@/components/ui/sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <div className="min-h-screen bg-gray-100/40">
          <div className="flex">
            <Sidebar />
            <main className="flex-1">
              <div className="flex items-center justify-between border-b bg-white px-6 py-3">
                <h1 className="text-xl font-semibold text-gray-700">
                  TAILOR SOFTWARE
                </h1>
                <button className="flex items-center gap-2 text-sm text-gray-600">
                  <span>admin</span>
                </button>
              </div>
              <div className="p-6">{children}</div>
            </main>
          </div>
        </div>
        
  );
}
