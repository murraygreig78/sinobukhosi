import Navigation from "./Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen sinobhukosi-bg-dark text-white">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <footer className="sinobhukosi-bg-dark border-t sinobhukosi-border-gold py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">Tel: 083 711 8686</p>
          </div>
          <p className="text-sm text-muted-foreground">©2020 by Sinobhukosi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;