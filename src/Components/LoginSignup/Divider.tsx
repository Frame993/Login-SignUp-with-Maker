
export default function Divider() {
  return (
    <div className="flex items-center justify-between py-10 gap-8">
      <svg
        className="flex-1"
        height="1"
        viewBox="0 0 130 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0.5H130" stroke="#DBDBDB" />
      </svg>

      <p className="text-[14px]">Or continue with</p>
      <svg
        className="flex-1"
        height="1"
        viewBox="0 0 130 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0.5H130" stroke="#DBDBDB" />
      </svg>
    </div>
  );
}
