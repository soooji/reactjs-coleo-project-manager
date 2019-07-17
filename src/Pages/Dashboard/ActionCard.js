import React,{useState,useEffect} from 'react';
import { LargeCard } from '../../Components/Cards/Card';
import { HeadTitle } from '../../Components/Texts/Text';
import { Select } from '../../Components/Select';
function ActionCard() {
  const [date,setDate] = useState(new Date());
  useEffect(() => {
    const clock = setInterval(() => setDate(new Date()),1000);
    return () => {
        clearInterval(clock)
    };
  }, [date])
  function formatTime(time) {
      if(time<10)
          return `0${time}`
      else
          return time
  }
  return (
        <LargeCard className="action-bar">
            <HeadTitle text={formatTime(date.getHours()) + ":"+ formatTime(date.getMinutes()) + ":" + formatTime(date.getSeconds())}/>
            <Select
                options={[
                    {id: 0,title: 'Availabe'},
                    {id: 1,title: 'Unavailable'},
                    {id: 2,title: 'Resting'},
                ]}
                arrow={true}
                selectedOption={0}
                title="Status:"
            />
      </LargeCard>
  );
}

export default ActionCard;
//TODO: delete
// eslint-disable-next-line no-lone-blocks
{/* <Clock value={date} className="action-bar-clock"/> */}