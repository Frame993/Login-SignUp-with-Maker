interface Props {
  name?: string;
  SubmitAction: () => void;
}

export default function Submit({ SubmitAction, name }: Props) {
  return (
    <>
      <button className="button-action mt-12" onClick={SubmitAction}>
        {name}
      </button>
    </>
  );
}
