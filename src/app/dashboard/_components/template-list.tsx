"use client";

import { useEffect, useState, Suspense } from "react";
import { contentTemplates } from "@/lib/content-templates";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Define the main component
const TemplateListContent = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(contentTemplates);
  const [searchCategory, setSearchCategory] = useState<string | null>(null);

  const searchParams = useSearchParams();

  // Fetch search category inside useEffect to avoid hydration mismatch
  useEffect(() => {
    setSearchCategory(searchParams.get("category"));
  }, [searchParams]);

  // Filter templates based on category
  useEffect(() => {
    if (searchCategory === "All") {
      setTemplateList(contentTemplates);
    } else if (searchCategory) {
      const filteredTemplates = contentTemplates.filter(
        (item) => item.category === searchCategory
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchCategory]);

  // Filter templates based on search input
  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filteredTemplates = contentTemplates.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(contentTemplates);
    }
  }, [searchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5">
      {templateList.map((template) => (
        <div key={template.slug}>
          <Link
            href={`/dashboard/${template.slug}`}
            className="bg-white w-full rounded-lg h-[200px] py-4 px-4 text-center flex flex-col justify-center"
          >
            <template.icon className="h-12 w-12 mx-auto"></template.icon>
            <h2 className="font-semibold mt-5">{template.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

// Wrap the component in Suspense
export const TemplateList = ({ searchInput }: { searchInput: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TemplateListContent searchInput={searchInput} />
    </Suspense>
  );
};

export default TemplateList;