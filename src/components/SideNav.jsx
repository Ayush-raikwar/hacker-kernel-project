import React from "react";
import styled from "styled-components";
import {ReactComponent as DashboardIcn} from "./images/dashboard2.svg";
import { ReactComponent as TransactionIcn } from "./images/exchange.svg";
import { ReactComponent as BalanceIcn } from "./images/file.svg";
import { ReactComponent as CashbackIcn } from "./images/cashback.svg";
import { ReactComponent as UserIcn } from "./images/user.svg";
import { ReactComponent as ReferIcn } from "./images/share(4).svg";
import { ReactComponent as ReportIcn } from "./images/warning.svg";

export const SideNav = () => {
    return(
        <SideNavContainer>
            <DashboardDiv>
                <DashboardIcon />
                <p>Dashboard</p>
            </DashboardDiv>

            <TransactionHistoryDiv>
                <TransactionIcon />
                <p>Transaction History</p>
            </TransactionHistoryDiv>

            <BalanceSheetDiv>
                <BalanceIcon />
                <p>Balance Sheet</p>
            </BalanceSheetDiv>

            <CashbackDiv>
                <CashbackIcon />
                <p>Cashback Earned</p>
            </CashbackDiv>

            <MyProfileDiv>
                <UserIcon />
                <p>My Profile</p>
            </MyProfileDiv>

            <ReferDiv>
                <ReferIcon />
                <p>Refer and Earn</p>
            </ReferDiv>

            <ReportDiv>
                <ReportIcon />
                <p>Report</p>
            </ReportDiv>
            
        </SideNavContainer>
    )
}

const SideNavContainer = styled.div`
    /* background-color: #aaa; */
    width: 18%;
    /* color:#fff; */
    /* padding: 1rem 1rem 1rem 3rem; */
    height: 87.9vh;
    div{
        display: flex;
        align-items: center;
        p{
            margin-left: 1rem;
        }
        padding: .7rem 1rem .7rem 3rem;
        /* margin: 1rem auto; */
        &:hover{
            background-color: grey;
        }
        &:active{
            background-color: red;
        }
    }
`
const DashboardDiv = styled.div`
    background-color: #2f4e65;
    color:#fff;
`
const DashboardIcon = styled(DashboardIcn)`
    width: 30px;
    /* color: #fff; */
`

const TransactionHistoryDiv = styled.div`
    
`
const TransactionIcon = styled(TransactionIcn)`
    width: 30px;
    height: 40px;
`

const BalanceSheetDiv = styled.div`

`
const BalanceIcon = styled(BalanceIcn)`
    width: 30px;
    height: 40px;

`
const CashbackDiv = styled.div`
    
`
const CashbackIcon = styled(CashbackIcn)`
    width: 30px;
    height: 40px;
`

const MyProfileDiv = styled.div`
    
`
const UserIcon = styled(UserIcn)`
    width: 30px;
    height: 40px;
`

const ReferDiv = styled.div`
    
`
const ReferIcon = styled(ReferIcn)`
    width: 30px;
    height: 40px;
`

const ReportDiv = styled.div`
    
`
const ReportIcon = styled(ReportIcn)`
    width: 30px;
    height: 40px;
`