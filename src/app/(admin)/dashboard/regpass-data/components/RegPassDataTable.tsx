'use client';
import TopButtons from '@/components/Buttons/TopButtons';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import { useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import Pagination from '@/components/tables/Pagination';

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const selectStyle = { ...inputStyle };

// Dropdown options
const regulatorOptions = [
  { value: '', label: 'All Regulators' },
  { value: 'sebi', label: 'Securities and Exchange Board of India' },
  { value: 'nse', label: 'NSE' },
  { value: 'china_sec', label: 'China Securities Regulatory Commission' },
  { value: 'eurex', label: 'EUREX Exchange' },
  { value: 'esma', label: 'European Securities and Markets Authority' },
  { value: 'fca', label: 'Financial Conduct Authority' },
  { value: 'cboe', label: 'Cboe Global Markets, Inc.' },
  { value: 'finra', label: 'Financial Industry Regulatory Authority' },
  { value: 'cftc', label: 'Commodity Futures Trading Commission' },
  { value: 'sec', label: 'Securities and Exchange Commission' },
];

const typeOptions = [
  { value: '', label: 'All Types' },
  { value: 'press_releases', label: 'Press Releases' },
  { value: 'speeches_statements', label: 'Speeches And Statements' },
  { value: 'meetings_events', label: 'Meetings & Events' },
  { value: 'past_meetings_events', label: 'Past Meetings & Events' },
  { value: 'sec_videos', label: 'Sec Videos' },
  { value: 'social_media', label: 'Social Media' },
  { value: 'whats_new', label: "What's New" },
  { value: 'policy_statements', label: 'Policy Statements' },
  { value: 'data_research', label: 'Data & Research' },
  { value: 'risk_alerts', label: 'Risk Alerts' },
  { value: 'rulemaking_activity', label: 'Rulemaking Activity' },
  { value: 'staff_accounting_bulletins', label: 'Staff Accounting Bulletins' },
  { value: 'staff_legal_bulletins', label: 'Staff Legal Bulletins' },
  { value: 'investment_mgmt_faq', label: 'Division Of Investment Management: Frequently Asked Questions' },
  { value: 'exchange_act_notices_orders', label: 'Exchange Act Exemptive Notices And Orders' },
  { value: 'investment_company_deregistration', label: 'Investment Company Act Deregistration Notices And Orders' },
  { value: 'investment_company_notices_orders', label: 'Investment Companies Act Notices And Orders' },
  { value: 'other_commission_orders', label: 'Other Commission Orders Notices And Information' },
  { value: 'petitions_rulemaking', label: 'Petitions For Rulemaking' },
];

const tableHeadings = ['Title', 'Source', 'Type', 'Published', 'Action'];

const TableData = Array(14).fill({
  title: 'title',
  source: 'source https://www.sec.gov/',
  type: 'news',
  published: '23-3-2025',
}).map((item, idx) => ({
  ...item,
  type: idx % 2 === 0 ? 'news' : 'press release',
}));

const itemsPerPage = 10;

const RegPassDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(TableData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = TableData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {/* Filters */}
      <div className="flex items-center py-4 justify-end gap-4">
        <select name="regulators" style={selectStyle}>
          {regulatorOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>

        <select name="types" style={selectStyle}>
          {typeOptions.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>

        <TopButtons label="Filter" variant="primary" />
      </div>

      {/* Table */}
      <div className="relative min-h-screen flex flex-col rounded-xl border border-gray-200 bg-white">
        <div className="overflow-hidden flex-grow">
          <div className="overflow-auto">
            <Table className="max-w-full overflow-x-auto">
              <TableHeader className="border-b border-gray-100">
                <TableRow>
                  {tableHeadings.map((heading) => (
                    <TableCell key={heading} isHeader className="px-5 py-3 font-medium text-gray-500 text-start text-theme-sm">
                      {heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100">
                {currentItems.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell className="px-5 py-4 text-xs break-words max-w-[150px] overflow-hidden text-ellipsis">
                      {data.title}
                    </TableCell>
                    <TableCell className="px-5 py-4 text-xs">{data.source}</TableCell>
                    <TableCell className="px-5 py-4 text-xs">
                      <span
                        className={`px-3 py-1 rounded-sm text-sm font-medium ${
                          data.type === 'news'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-orange-100 text-orange-500'
                        }`}
                      >
                        {data.type}
                      </span>
                    </TableCell>
                    <TableCell className="px-5 py-4 text-xs">{data.published}</TableCell>
                    <TableCell className="px-5 py-4 text-xs">
                      <div className="flex gap-6 items-center">
                        <MdModeEdit className="text-xl cursor-pointer" />
                        <MdDelete className="text-xl cursor-pointer" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination */}
        <div className="sticky bottom-0 bg-white border-t py-3 flex items-center justify-end px-20">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default RegPassDataTable;
