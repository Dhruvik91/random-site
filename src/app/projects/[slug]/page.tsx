'use client';

import ProjectDetailsContainer from '@/features/project-details/ProjectDetailsContainer';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  return <ProjectDetailsContainer slug={params.slug} />;
}