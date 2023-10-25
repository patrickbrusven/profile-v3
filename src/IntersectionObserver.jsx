import { useInView } from "react-intersection-observer";

function IntersectionObserver({
  setValue,
  threshold,
  wrapperClass,
  observerClass,
}) {
  const { ref } = useInView({
    threshold: threshold,
    onChange: (inView) => {
      setValue(inView);
    },
  });

  return (
    <>
      <div className={wrapperClass} style={{ zIndex: -100 }}>
        <div ref={ref} className={observerClass}></div>
      </div>
    </>
  );
}

export default IntersectionObserver;
