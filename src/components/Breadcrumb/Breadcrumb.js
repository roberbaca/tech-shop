import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import '../../stylesheets/Breadcrumb.css';
import '../../stylesheets/Style.css';

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();
  
    return (
      <div className="breadcrumbs">
        <h1 className="sectiontitle">TITLE</h1>
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
          <div className="bc" key={match.url}>
            <Link to={match.url || ""} className="link">{breadcrumb}</Link>
            {index < breadcrumbs.length - 1 && "/"}
          </div>
        ))}
      </div>
    );
  };
  
  export default Breadcrumbs;