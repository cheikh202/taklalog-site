// This root layout is intentionally minimal.
// The [locale]/layout.tsx handles the <html> and <body> tags
// to support RTL/LTR and multiple languages correctly.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
