import React, { useState, useEffect } from "react";
import { Framework } from "@superfluid-finance/sdk-core";
import style from './QuickHotel.module.scss';
import { ethers } from "ethers";
import {
    Button,
    Form,
    FormGroup,
    FormControl,
    Spinner,
    Card
  } from "react-bootstrap";


//where the Superfluid logic takes place
async function createNewFlow(recipient, flowRate) {

    const url =
    "https://polygon-mumbai.g.alchemy.com/v2/VWUvk7tr1s58aCHMxAgRqeyiyjcfRmSW";
    const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
    const network = await customHttpProvider.getNetwork();
  
  
    const sf = await Framework.create({
      chainId: network.chainId,
      provider: customHttpProvider
  })
  
  const signer = sf.createSigner({
    privateKey:'9dcf283071cfc84e514bc7555d319c09633fc6f0583c05cfae41d19945629c3d',
    provider: customHttpProvider
  })
    const DAIxContract = await sf.loadSuperToken("fDAIx");
    const DAIx = DAIxContract.address;
  
    try {
      const createFlowOperation = sf.cfaV1.createFlow({
        receiver: recipient,
        flowRate: flowRate,
        superToken: DAIx
        // userData?: string
      });
  
      console.log("Creating your stream...");
  
      const result = await createFlowOperation.exec(signer);
      console.log(result);
  
      console.log(
     `HooraYY!! Stream Started
      View Your Stream At: https://app.superfluid.finance/dashboard/
      Network: Polygon
      Super Token Streaming: DAIx
      Sender: 0xC2Aa1cEa55983c551609445b1221CAa56FDa2503
      Receiver: ${recipient},
      FlowRate: ${flowRate}
      `
      );
    } catch (error) {
      console.log(
        "Oho! Its an Error"
      );
      console.error(error);
    }
  }



  async function deleteFlow(recipient) {


    const url =
    "https://polygon-mumbai.g.alchemy.com/v2/VWUvk7tr1s58aCHMxAgRqeyiyjcfRmSW";
    const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
    const network = await customHttpProvider.getNetwork();

    const sf = await Framework.create({
      chainId: network.chainId,
      provider: customHttpProvider
  })
  
    const signer = sf.createSigner({
      privateKey:
        "9dcf283071cfc84e514bc7555d319c09633fc6f0583c05cfae41d19945629c3d",
      provider: customHttpProvider
    });
  
    const DAIxContract = await sf.loadSuperToken("fDAIx");
    const DAIx = DAIxContract.address;
  
    try {
      const deleteFlowOperation = sf.cfaV1.deleteFlow({
        sender: "0xC2Aa1cEa55983c551609445b1221CAa56FDa2503",
        receiver: recipient,
        superToken: DAIx
        // userData?: string
      });
  
      console.log("Deleting your stream...");
  
      await deleteFlowOperation.exec(signer);
  
      console.log(
        `Checkout Done!! Stream stopped!!
         Network: Polygon
         Super Token: DAIx
         Sender: 0xC2Aa1cEa55983c551609445b1221CAa56FDa2503
         Receiver: ${recipient}
      `
      );
    } catch (error) {
      console.error(error);
    }
  }
  
function QuickHotel({ hmDetails }) {

  const [recipient, setRecipient] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [flowRate, setFlowRate] = useState("");
  const [flowRateDisplay, setFlowRateDisplay] = useState("");
  const [currentAccount, setCurrentAccount] = useState("");

 

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    const chain = await window.ethereum.request({ method: "eth_chainId" });
    let chainId = chain;
    console.log("chain ID:", chain);
    console.log("global Chain Id:", chainId);
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  function calculateFlowRate(amount) {
    if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
      alert("You can only calculate a flowRate based on a number");
      return;
    } else if (typeof Number(amount) === "number") {
      if (Number(amount) === 0) {
        return 0;
      }
      const amountInWei = ethers.BigNumber.from(amount);
      const dailyAmount = ethers.utils.formatEther(amountInWei.toString());
      const calculatedFlowRate = dailyAmount * 3600 * 24 ;
      return calculatedFlowRate;
    }
  }

  function CreateButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="button" {...props}>
        {isButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }

  function DeleteButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="button" {...props}>
        {isButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }

  const handleRecipientChange = (e) => {
    setRecipient(() => ([e.target.name] = e.target.value));
  };

  const handleFlowRateChange = (e) => {
    setFlowRate(() => ([e.target.name] = e.target.value));
    let newFlowRateDisplay = calculateFlowRate(e.target.value);
    setFlowRateDisplay(newFlowRateDisplay.toString());
  };




    return (
        <div className={style.lovely_home}>
            <div>
                <img
                    className={style.lovely_home_img}
                    src={hmDetails.img}
                    alt="XYZ Hotel"
                    height={200}
                    width={250}
                />
            </div>
            
            <a href={`/hotels/${hmDetails.id}`}>
                <h3>{hmDetails.title}</h3>
            </a>
            <p style={{textTransform: 'capitalize'}}>{hmDetails.location}</p>
            <p className={style.lovely_home_price}> 💲{hmDetails.price}</p>

            <div className={style.lovely_home_btm}>
                <span>{hmDetails.rating}</span>
                {hmDetails.rating > 9 ? <p>Wonderful</p> : <p>Exceptional</p>}
            </div>

            <Form>
        <FormGroup className="mb-3">
          <FormControl
            name="recipient"
            value={recipient}
            onChange={handleRecipientChange}
            placeholder="Enter recipient address"
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormControl
            name="flowRate"
            value={flowRate}
            onChange={handleFlowRateChange}
            placeholder="Enter a flowRate in wei/second"
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormControl
            name="verify"
            placeholder="Enter 4 digit PIN"
          ></FormControl>
        </FormGroup>
       
        <CreateButton
          onClick={() => {
            setIsButtonLoading(true);
            createNewFlow(recipient, flowRate);
            setTimeout(() => {
              setIsButtonLoading(false);
            }, 1000);
          }}
        >
          Create🌫
        </CreateButton>

        <DeleteButton
          onClick={() => {
            setIsButtonLoading(true);
            deleteFlow(recipient);
            setTimeout(() => {
              setIsButtonLoading(false);
            }, 1000);
          }}
        >
          CheckOut🚨
        </DeleteButton>
        
        
      </Form>

      <div className="description">
        <p>
          On🌊 
        </p>
        <div className="calculation">
          <p>Your flow will be equal to:</p>
          <p>
            <b>${flowRateDisplay !== " " ? flowRateDisplay : 0}</b> DAIx/day
          </p>
        </div>
      </div>
        </div>
    );
}

export default QuickHotel;
