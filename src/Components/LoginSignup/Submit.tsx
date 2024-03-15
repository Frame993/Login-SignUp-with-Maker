interface Props {
  name?: string;
  SubmitAction: () => void;
}

export default function Submit({ SubmitAction, name }: Props) {
  return (
    <>
      <button className="button-action mt-8" onClick={SubmitAction}>
        {name}
      </button>
    </>
  );
}
