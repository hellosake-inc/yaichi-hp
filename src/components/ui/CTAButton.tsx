"use client";
import React from "react";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import clsx from "clsx";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export default function CTAButton({ 
  href, 
  children, 
  variant = "primary",
  className = "",
  size = "md",
  showIcon = true
}: CTAButtonProps) {
  const isExternal = href.startsWith('http');
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const variantClasses = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50"
  };

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={isExternal ? `${children} (opens in new tab)` : undefined}
      className={clsx(
        "inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span>{children}</span>
      {showIcon && isExternal && (
        <>
          <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" />
          <span className="sr-only">Opens in new tab</span>
        </>
      )}
    </a>
  );
}