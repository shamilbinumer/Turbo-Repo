"use client";

import { Button } from "../../../../packages/ui/src/button";

export default function Home() {
  return (
    <div>
      main app
      <div>
        <a href="/second-app">Goto Second app</a>
        <div>
          <Button className="btn-primary" appName="Main">
            Click Me
          </Button>
        </div>
      </div>
    </div>
  );
}
