export const metadata = {
  title: "Order Sync Server",
  description: "Shiprocket Automation Server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#020617",
        }}
      >
        {children}
      </body>
    </html>
  );
}
