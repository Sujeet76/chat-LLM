import React from "react";

import { Button } from "@/components/ui/button";

const HomePage: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold">Next 15 starter kit</h1>
      <Button>Hi, I am a button</Button>
    </div>
  );
};

export default HomePage;
