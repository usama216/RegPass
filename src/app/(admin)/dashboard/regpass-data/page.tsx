
import { PageTitle } from '@/components/PageTitle'
import React from 'react'
import { Metadata } from 'next'
import RegPassDataTable from './components/RegPassDataTable';



export const metadata: Metadata = {
  title: "RegPass© Horizon Scanning - SEC Alerts",
  description: "RegPass© Horizon Scanning - SEC Alerts",
};

const page = () => {
  return (
    <>
    
    <PageTitle title="RegPass© Horizon Scanning - SEC Alerts" />
    <RegPassDataTable/>
    </>
  )
}

export default page