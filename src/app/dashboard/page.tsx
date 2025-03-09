"use client";

import { useState, Suspense } from "react";
import SearchDashboard from "./_components/search-dashboard";
import { TemplateList } from "./_components/template-list";

const Dashboard = () => {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div>
      <SearchDashboard onSearchInput={setSearchInput} />
      
      {/* Wrap TemplateList inside Suspense */}
      <Suspense fallback={<div>Loading templates...</div>}>
        <TemplateList searchInput={searchInput as string} />
      </Suspense>
    </div>
  );
};

export default Dashboard;
