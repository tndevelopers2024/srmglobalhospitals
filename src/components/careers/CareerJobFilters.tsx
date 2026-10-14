"use client";

import { useState } from "react";
import type { JobItem } from "./CareersFilterAndJobs";
import CareerJobCard from "./CareerJobCard";

interface Props {
  jobs: JobItem[];
  onApply: (job: JobItem) => void;
  accentColor: string;
}

export default function CareerJobFilters({ jobs, onApply, accentColor }: Props) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  return (
    <div style={{ marginBottom: "40px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {jobs.map((job) => <CareerJobCard key={job.id} job={job} isOpen={expanded.has(job.id)} accentColor={accentColor} onApply={onApply} onToggle={() => setExpanded((previous) => {
          const next = new Set(previous);
          if (next.has(job.id)) next.delete(job.id);
          else next.add(job.id);
          return next;
        })} />)}
        {jobs.length === 0 && <p role="status">No current openings are available.</p>}
      </div>
    </div>
  );
}
