interface TimelineItemProps {
  title: string;
  subtitle: string;
  description: string;
  accentColor: 'purple' | 'blue';
}

export default function TimelineItem({ title, subtitle, description, accentColor }: TimelineItemProps) {
  const dotColor = accentColor === 'purple' ? 'border-purple-500' : 'border-blue-500';
  const subtitleColor = accentColor === 'purple' ? 'text-purple-400' : 'text-blue-400';

  return (
    <div className="relative">
      <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-slate-900 border-2 ${dotColor}`} />
      <h4 className="text-xl font-semibold text-slate-200">{title}</h4>
      <p className={`${subtitleColor} font-medium mt-1`}>{subtitle}</p>
      <p className="text-slate-400 mt-2">{description}</p>
    </div>
  );
}
