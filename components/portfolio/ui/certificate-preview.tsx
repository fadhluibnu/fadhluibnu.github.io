import Image from "next/image";

export default function CertificatePreview({ imageUrl }: { imageUrl?: string }) {
  return (
    <div className="certificate-frame" aria-hidden="true">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Certificate"
          fill
          className="object-cover rounded-[9px] border-2 border-[#26394d]"
        />
      ) : (
        <div className="certificate-paper">
          <div className="certificate-logo">
            dicoding<span>▣</span>
          </div>
          <div className="certificate-ribbon" />
          <div className="certificate-mini-label" />
          <div className="certificate-name" />
          <div className="certificate-course" />
          <div className="certificate-date-line" />
          <div className="certificate-signature" />
          <div className="certificate-qr" />
        </div>
      )}
    </div>
  );
}
