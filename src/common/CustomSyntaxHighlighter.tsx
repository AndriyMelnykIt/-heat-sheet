import { useState, FC } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SyntaxHighlighter from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface CustomSyntaxHighlighterProps {
  codeString: string;
}

const CustomSyntaxHighlighter: FC<CustomSyntaxHighlighterProps> = ({
  codeString,
}): JSX.Element => {
  const [copy, setCopy] = useState<Boolean>(false);

  return (
    <div>
      <div
        style={{
          background: 'grey',
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <p>Example code</p>
        {copy ? (
          <Box>
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
          >
            <ContentCopyIcon />
            Copy code
          </Button>
        )}
      </div>
      <SyntaxHighlighter language="javascript" style={docco.hljsVariable}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CustomSyntaxHighlighter;
