import { useState, FC } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SyntaxHighlighter from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

import styles from './CustomSyntaxHighlighter.module.css';

interface CustomSyntaxHighlighterProps {
  codeString: string;
}

const CustomSyntaxHighlighter: FC<CustomSyntaxHighlighterProps> = ({
  codeString,
}): JSX.Element => {
  const [copy, setCopy] = useState<boolean>(false);

  return (
    <>
      <Box className={styles.highlighterHeaderWrapper}>
        <p>Example code</p>
        {copy ? (
          <Box sx={{ color: '#fff', display: 'flex', flexDirection: 'row' }}>
            <DoneAllIcon />
            <Typography>Copied!</Typography>
          </Box>
        ) : (
          <Button
            onClick={() => {
              navigator.clipboard.writeText(codeString);
              setCopy(true);

              setTimeout(() => {
                setCopy(false);
              }, 3000);
            }}
            sx={{ color: '#fff', display: 'flex', flexDirection: 'row' }}
          >
            <ContentCopyIcon />
            <Typography>Copy code</Typography>
          </Button>
        )}
      </Box>
      <SyntaxHighlighter language="javascript" styles={docco.hljsVariable} className={styles.highlighterCode}>
        {codeString}
      </SyntaxHighlighter>
    </>
  );
};

export default CustomSyntaxHighlighter;
