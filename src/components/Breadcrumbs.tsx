import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <div className="bg-white border-b border-neutral-100 py-3">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center gap-2 text-[10px] uppercase tracking-widest font-display font-medium text-slate-grey/60">
        <Link to="/" className="hover:text-maroon transition-colors flex items-center gap-1">
          <Home size={10} />
          Home
        </Link>
        
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <div key={to} className="flex items-center gap-2">
              <ChevronRight size={10} />
              {last ? (
                <span className="text-maroon font-bold">{value.replace(/-/g, " ")}</span>
              ) : (
                <Link to={to} className="hover:text-maroon transition-colors">
                  {value.replace(/-/g, " ")}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
