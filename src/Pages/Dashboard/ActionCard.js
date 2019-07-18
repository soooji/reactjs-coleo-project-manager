import React,{useState,useEffect} from 'react';
import { LargeCard } from '../../Components/Cards/Card';
import { HeadTitle } from '../../Components/Texts/Text';
import { Select } from '../../Components/Form/Select';
import { CircleSpacer } from '../../Components/Spacer/Spacers';
import moment from 'moment'
function ActionCard() {
  const [now,setNow] = useState(moment());
  useEffect(() => {
    const clock = setInterval(() => setNow(moment()),1000);
    return () => {
        clearInterval(clock)
    };
  }, [now])
  return (
        <LargeCard className="card-head-bar card-style">
            <div className="card-head-title-box">
                <HeadTitle className="white-text-on-dark" text={now.format('h:mm:ss')}/>
                <CircleSpacer style={{marginLeft:10,marginRight:10}}/>
                <div className="today-date">
                    {now.format('MMM Do')}
                </div>
            </div>
            <div className="card-head-actions">
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
            </div>
      </LargeCard>
  );
}

export default ActionCard;
//TODO: delete
// eslint-disable-next-line no-lone-blocks
{/* <Clock value={date} className="action-bar-clock"/> */}