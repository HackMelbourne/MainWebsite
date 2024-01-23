interface SponsorTitleProps {
  title: string;
}

const SponsorTitle = ({ title } : SponsorTitleProps) => {
  return (
    <div className="justify-center">
      <h2 className="text-4xl font-extrabold mb-6">
        {title}
      </h2>
    </div>
  )
}

export default SponsorTitle;