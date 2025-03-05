import React from "react";

import { Input } from "@/components/ui/input";

export function Search() {
  const [searchText, setSearchText] = React.useState("");

  return (
    <div className="flex flex-col p-2">
      <Input
        value={searchText}
        onChange={(event) => setSearchText(event.currentTarget.value)}
      />
      <div className=""></div>
    </div>
  );
}
