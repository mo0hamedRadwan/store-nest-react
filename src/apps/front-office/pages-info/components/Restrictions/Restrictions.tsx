export default function Restrictions() {
  return (
    <div className=" text-mainColor">
      <h2 className="text-2xl leading-[1.2] font-bold mb-6">
        Rights & restrictions
      </h2>
      <ul className="list-decimal list-inside">
        <li className="mb-4 text-[1rem]">
          Members must be at least 18 years of age.
        </li>
        <li className="mb-4 text-[1rem]">
          Members are granted a time-limited, non-exclusive, revocable,
          nontransferable, and non-sublicensable right to access that portion of
          the online course corresponding to the purchase.
        </li>
        <li className="mb-4 text-[1rem]">
          The portion of the online course corresponding to the purchase will be
          available to the Member as long as the course is maintained by the
          Company, which will be a minimum of one year after Member’s purchase.
        </li>
        <li className="mb-4 text-[1rem]">
          The videos in the course are provided as a video stream and are not
          downloadable.
        </li>
        <li className="mb-4 text-[1rem]">
          By agreeing to grant such access, the Company does not obligate itself
          to maintain the course, or to maintain it in its present form.
        </li>
      </ul>

      {/* Links To Other Web Sites */}
      <h2 className="text-2xl leading-[1.2] font-bold mb-6">
        Links To Other Web Sites
      </h2>
      <p className="text-[17px] mb-4 font-normal">
        Our Service may contain links to third-party web sites or services that
        are not owned or controlled by Evara.
      </p>
      <p className="text-[17px] mb-4 font-normal">
        Evara has no control over, and assumes no responsibility for, the
        content, privacy policies, or practices of any third party web sites or
        services. You further acknowledge and agree that Evara shall not be
        responsible or liable, directly or indirectly, for any damage or loss
        caused or alleged to be caused by or in connection with use of or
        reliance on any such content, goods or services available on or through
        any such web sites or services.
      </p>
      <p className="text-[17px] mb-4 font-normal">
        We strongly advise you to read the terms and conditions and privacy
        policies of any third-party web sites or services that you visit.
      </p>
    </div>
  );
}
