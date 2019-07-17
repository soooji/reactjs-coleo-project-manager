import React,{useState,useEffect,useRef,useContext} from 'react';
import { Frame, useCycle } from "framer";
import ArrowDown from '@material-ui/icons/KeyboardArrowDownOutlined'
import {useOutsideClick} from './../APIs/Utility'
import {ThemeContext} from './../APIs/theme-context';
export function Select(props) {  
    const theme = useContext(ThemeContext);
    const [selectedOption,setSelectedOption] = useState({id: -1,title: 'Choose'})
    const [animate, cycle] = useCycle(
        {
            height:0,
            when: "afterChildren"
        },
        {
            height:'auto',
            transition: {
                delayChildren: 0.5,
                staggerDirection: -1,
                when: "beforeChildren",
                ease: 'anticipate'
            }
        }
    );
    const [animateArrow, cycleArrow] = useCycle(
        {
            rotate: 0,
            x: 0,
            y: 1,
            transition: {
                ease: 'linear',
                duration: 0.3
            }
        },
        {
            rotate: 180,
            x: 6,
            y: -3,
            transition: {
                ease: 'linear',
                duration: 0.3
            }
        }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const collectSelectedOption = ()=>{
        props.options.map(
            (v)=>{
                if(v.id === props.selectedOption) {
                    setSelectedOption(v);
                    return 1
                } else return -1
            }
        )
    }
    useEffect(() => {
        collectSelectedOption();
        return () => {
            setSelectedOption({id: -1,title: 'Choose'});
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.selectedOption])

    
    const changeOption = (option)=>{
        setSelectedOption(option);
        if(props.onChange) {
            props.onChange(option);
        }
        closeSelect();
    }
    function closeSelect() {
        if(animate.height !== 0) {
            cycle();
            cycleArrow();   
        }
    }
    function toggleSelect() {
        cycle();
        cycleArrow();   
    }
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef,closeSelect);
  return (
      <div ref={wrapperRef} className="select noselect">
        <div onClick={()=>toggleSelect()} className="select-in">
            <div className="title">{theme.background + " | "}{props.title}</div>
            <div className="value">{selectedOption.title}</div>
            {props.arrow ? <Frame animate={animateArrow} width="initial" height="initial" background="initial" position="initial"><ArrowDown style={{marginLeft:5}} className="select-icon"/></Frame> : null}
        </div>
        <Frame
            animate={animate}
            width="100%"
            height="0px"
            className="select-options"
            background="inherit"
        >
            {props.options.map(
                (v,k)=>
                <Frame
                    whileHover={{ scale: 0.95 }}
                    key={k}
                    custom={v}
                    width="calc(100% - 10px)"
                    height="initial"
                    background="inherit"
                    className="select-option"
                    position="relative"
                    onClick={()=>changeOption(v)}
                >
                    {v.title}
                </Frame>
            )}
        </Frame>
    </div>
  );
}