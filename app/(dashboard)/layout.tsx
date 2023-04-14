import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";

interface IDashboardRootLayoutProps {
  children: React.ReactElement;
}

export default function DashboardRootLayout({
  children,
}: IDashboardRootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
