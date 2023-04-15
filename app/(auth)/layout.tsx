import "@/styles/global.css";
import GlassPane from "@/components/GlassPane";

interface IAuthRootLayoutProps {
  children: React.ReactElement;
}

export default function AuthRootLayout({ children }: IAuthRootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="w-screen h-screen p-6 rainbow-mesh">
        <GlassPane className="flex items-center justify-center w-full h-full">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
