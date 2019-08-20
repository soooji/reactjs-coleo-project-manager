import React,{useState,useEffect} from 'react';
import moment from 'moment'
import { LargeCard } from '../Cards/Card';
import { HeadTitle } from '../Texts/Text';
import { CircleSpacer } from '../Spacer/Spacers';
import { Select } from '../Form/Select';
function ActionCard() {
  const [now,setNow] = useState(moment());
  useEffect(() => {
    const clock = setInterval(() => setNow(moment()),1000);
    return () => {
        clearInterval(clock)
    };
  }, [now])
  return (
<LargeCard
        className="action-bar-card"
        title={
            <>
                <HeadTitle className="white-text-on-dark" text={now.format('h:mm')}/>
                <CircleSpacer style={{marginLeft:10,marginRight:10}}/>
                <div className="today-date">
                    {now.format('MMM Do')}
                </div>
            </>
        }
        actions={
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
        }
    >
    </LargeCard>
  );
}

export default ActionCard;
//TODO: delete
// eslint-disable-next-line no-lone-blocks
{/* <Clock value={date} className="action-bar-clock"/> */}