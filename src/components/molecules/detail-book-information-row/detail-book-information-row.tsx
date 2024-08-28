interface IInformationRow {
  label: string;
  field: string | number;
}

export const DetailBookInformationRow = ({ label, field }: IInformationRow) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <h5>{label}</h5>
      <h5>{field}</h5>
    </div>
  );
};
