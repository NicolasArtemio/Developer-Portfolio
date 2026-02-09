import { motion } from "framer-motion";

interface SkeletonProps {
    className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
    return (
        <motion.div
            className={`bg-[var(--surface-2)] rounded-lg animate-pulse ${className}`}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
    );
}

// Project Card Skeleton
export function ProjectCardSkeleton() {
    return (
        <div className="p-5 bg-[var(--surface-1)] ring-1 ring-[var(--border-color)] rounded-[2rem]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                {/* Image skeleton */}
                <Skeleton className="w-full sm:w-28 sm:h-28 h-40 rounded-2xl" />

                <div className="flex-1 w-full space-y-3">
                    {/* Title skeleton */}
                    <Skeleton className="h-6 w-3/4" />

                    {/* Description skeleton */}
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />

                    {/* Technologies skeleton */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        <Skeleton className="h-6 w-16 rounded-lg" />
                        <Skeleton className="h-6 w-20 rounded-lg" />
                        <Skeleton className="h-6 w-14 rounded-lg" />
                    </div>

                    {/* Link skeleton */}
                    <Skeleton className="h-4 w-24 mt-2" />
                </div>
            </div>
        </div>
    );
}

// Skill Card Skeleton
export function SkillCardSkeleton() {
    return (
        <div className="p-8 bg-[var(--surface-1)] ring-1 ring-[var(--border-color)] rounded-[2rem]">
            <div className="flex items-center mb-6">
                <Skeleton className="w-14 h-14 rounded-2xl" />
                <div className="ml-4 space-y-2 flex-1">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-48" />
                </div>
            </div>

            {/* Technologies grid skeleton */}
            <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} className="h-8 w-20 rounded-lg" />
                ))}
            </div>
        </div>
    );
}

// Reference Card Skeleton
export function ReferenceCardSkeleton() {
    return (
        <div className="reference-card flex flex-col p-8">
            {/* Quote skeleton */}
            <div className="space-y-2 mb-8">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Author info skeleton */}
            <div className="flex items-center justify-between border-t border-[var(--border-color)] pt-6 mt-auto">
                <div className="flex items-center space-x-3">
                    <div className="space-y-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-4 w-24" />
                    </div>
                </div>
                <Skeleton className="h-8 w-8 rounded-lg" />
            </div>
        </div>
    );
}

// Hero Section Skeleton
export function HeroSkeleton() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-12 w-64" />
            <Skeleton className="h-8 w-48" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
            </div>
            <div className="flex gap-4 mt-8">
                <Skeleton className="h-12 w-32 rounded-xl" />
                <Skeleton className="h-12 w-32 rounded-xl" />
            </div>
        </div>
    );
}

// Contact Form Skeleton
export function ContactFormSkeleton() {
    return (
        <div className="flex flex-col gap-5 max-w-lg w-full p-8 md:p-10 bg-[var(--surface-1)] rounded-[2.5rem] border border-[var(--border-color)]">
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-20 w-72 mx-auto rounded-lg" />
            <Skeleton className="h-14 w-full rounded-2xl mt-4" />
        </div>
    );
}
