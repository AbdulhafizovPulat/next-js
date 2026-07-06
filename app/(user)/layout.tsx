import { Header, Footer } from "@/shared";

const UserLayout = ({ children }: ChildProps) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default UserLayout;
