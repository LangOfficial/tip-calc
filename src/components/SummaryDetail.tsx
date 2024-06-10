interface Props {
  detailName: string,
  money: string
}

const SummaryDetail = ({detailName, money}: Props) => {
  return (
    <div className="flex justify-between items-center mb-8 halfxl:mb-14">
      <div>
        <p className="text-secondary_100 font-semibold text-xl">{detailName}</p>
        <p className="text-secondary_500">/ person</p>
      </div>
      <p className="text-5xl text-primary font-bold">${money || '0.00'}</p>
    </div>
  );
}
 
export default SummaryDetail;