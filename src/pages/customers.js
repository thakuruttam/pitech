
import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Chip,
  Divider,
} from "@mui/material";
import DashboardLayout from "src/layouts/dashboard/layout";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CustomCard from "src/components/CustomCard";
import Stack from '@mui/material/Stack';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const cardData = [
  {
    code: "4907 - 00019",
    chipLabel: "RT",
    chipBackgroundColor: "green",
    title: "HOTEL/TECH WORK SQUAD GFR",
    subChipLabel: "Lorem ipsum",
    subChipBackgroundColor: "#54ebeb",
    subtitle: "Services",
    date: "12 jul 2019",
  },
  {
    code: "4907 - 00019",
    chipLabel: "RT",
    chipBackgroundColor: "green",
    title: "HOTEL/TECH WORK SQUAD GFR",
    subChipLabel: "Lorem ipsum",
    subChipBackgroundColor: "#54ebeb",
    subtitle: "Services",
    date: "12 jul 2019",
  },
  {
    code: "4907 - 00019",
    chipLabel: "RT",
    chipBackgroundColor: "green",
    title: "HOTEL/TECH WORK SQUAD GFR",
    subChipLabel: "Lorem ipsum",
    subChipBackgroundColor: "#54ebeb",
    subtitle: "Services",
    date: "12 jul 2019",
  },
  {
    code: "4907 - 00019",
    chipLabel: "RT",
    chipBackgroundColor: "green",
    title: "HOTEL/TECH WORK SQUAD GFR",
    subChipLabel: "Lorem ipsum",
    subChipBackgroundColor: "#54ebeb",
    subtitle: "Services",
    date: "12 jul 2019",
  },
  {
    code: "4907 - 00019",
    chipLabel: "RT",
    chipBackgroundColor: "green",
    title: "HOTEL/TECH WORK SQUAD GFR",
    subChipLabel: "Lorem ipsum",
    subChipBackgroundColor: "#54ebeb",
    subtitle: "Services",
    date: "12 jul 2019",
  },
  {
    code: "4907 - 00019",
    chipLabel: "RT",
    chipBackgroundColor: "green",
    title: "HOTEL/TECH WORK SQUAD GFR",
    subChipLabel: "Lorem ipsum",
    subChipBackgroundColor: "#54ebeb",
    subtitle: "Services",
    date: "12 jul 2019",
  },
  {
    code: "4907 - 00019",
    chipLabel: "RT",
    chipBackgroundColor: "green",
    title: "HOTEL/TECH WORK SQUAD GFR",
    subChipLabel: "Lorem ipsum",
    subChipBackgroundColor: "#54ebeb",
    subtitle: "Services",
    date: "12 jul 2019",
  },
];




const Page = () => {

  return (
    <>
      <Head>
        <title>Uttam Singh</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container item gap={2}>
            <Grid item md={4.5} xs={12}>
              <Card sx={{ backgroundColor: "#ede5dd" }}>
                <CardContent>
                                       
<div style={{ display: 'flex', alignItems: 'center',gap: '10px' }}>
          <TextField
           sx={{
          '& input': {
            fontSize: '1%', 
          },
        }}
      variant="outlined"
      fullWidth
      defaultValue= "My responsibilities"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
                       <SearchIcon />

          </InputAdornment>
        ),
      }}
    />
                <TextField
            sx={{
          '& input': {
            fontSize: '1px',
          },
        }}
      variant="outlined"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
                <ExpandMoreIcon />

          </InputAdornment>
        ),
      }}
    />

<Icon color="primary">add_circle</Icon>
</div>

<div style={{ display: 'flex', alignItems: 'center',gap: '15%' }}>
    <TextField
    sx={{
          '& input': {
            fontSize: '12px',
          },
        }}
          required
          id="standard-required"
          label="Coy id"
          defaultValue="Enter Coy id"
          variant="standard"
        />

          <TextField
          sx={{
          '& input': {
            fontSize: '12px',
          },
        }}
          required
          id="standard-required"
          label="Order no"
          defaultValue="Enter Order no"
          variant="standard"
        />

</div>



      
        

   

<div style={{ display: 'flex', alignItems: 'center',gap: '45%', fontSize: '80%' }}>
<div>
<u><b>sort</b> 
</u>                <ExpandMoreIcon />

<u><b>Group by </b> 
</u>               <ExpandMoreIcon />

</div>

<div>
<u>clear</u>
<u> search</u>
</div>
</div>













                </CardContent>
              </Card>
              <Grid container item gap={1} sx={{ mt: "20px", ml: "10px", alignItems: "center" }}>
                <Typography>ORDER</Typography>
                <Chip
                  label="8"
                  sx={{
                    height: "22px",
                    "& .MuiChip-label": {
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                      whiteSpace: "nowrap",
                    },
                  }}
                />
              </Grid>
              <Grid sx={{ pt: "5px", display: "flex", flexDirection: "column", gap: "5px" }}>
                {cardData.map((data, index) => (
                  <CustomCard key={index} data={data} />
                ))}
              </Grid>
            </Grid>
            <Grid item md={7.2} xs={12}>
              <Card sx={{ backgroundColor: "#f0f0f0", borderRadius: "8px" }}>
                <Grid sx={{ px: "16px", py: "15px" }}>
                  <Grid container justifyContent="space-between">
                    <Grid style={{ display: "flex" }} gap={2}>
                      <Grid style={{ display: "flex" }} gap={1}>
                        <Chip
                          label="RT"
                          sx={{
                            height: "25px",
                            backgroundColor: "green",
                            color: "white",
                            "& .MuiChip-label": {
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              paddingLeft: "4px",
                              paddingRight: "4px",
                              whiteSpace: "nowrap",
                            },
                          }}
                        />
                        <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                          4907 - 00019
                        </Typography>
                      </Grid>
                      <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                        HOTEL/TECH WORK SQUAD GFR
                      </Typography>
                    </Grid>
                    <Grid>
                      <Chip
                        label="Lorem ipsum"
                        sx={{
                          borderRadius: "7px",
                          height: "22px",
                          backgroundColor: "#54ebeb",
                          "& .MuiChip-label": {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            whiteSpace: "nowrap",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    sx={{ pt: "10px" }}
                    justifyContent="space-between"
                    container
                    gap={2}
                    alignItems="center"
                  >
                    <Grid style={{ display: "flex" }} gap={2} alignItems="center">
                      <Grid>
                        <Typography sx={{ fontSize: "12px" }}>Date Requested</Typography>

                        <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                          10 jul 2019
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography sx={{ fontSize: "12px" }}>Type</Typography>

                        <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                          Services
                        </Typography>
                      </Grid>
                      <Grid>
                        <Typography sx={{ fontSize: "12px" }}>Account Code</Typography>

                        <Typography sx={{ fontSize: "13px", fontWeight: "600" }}>
                          5830042 - HM PAX ACCOMODATION (LABOUR)
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid style={{ display: "flex" }} gap={2}>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          textDecoration: "underline",
                          textUnderlineOffset: "2px",
                          color: "green",
                        }}
                      >
                        Order Summary
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "13px",
                          textDecoration: "underline",
                          textUnderlineOffset: "2px",
                          color: "green",
                        }}
                      >
                        Order Progress
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sx={{ backgroundColor: "#fbfbfb", px: "16px", py: "15px" }}>
                  <Grid container gap={6}>
                    <Typography sx={{ fontSize: "13px", color: "green" }}>
                      Edit Order Details
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "green" }}>
                      Print Order Details
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "green" }}>
                      Change Delivery Status
                    </Typography>
                    <Typography sx={{ fontSize: "13px", color: "green" }}>Reports</Typography>
                    <Typography sx={{ fontSize: "13px", color: "green" }}>Actions</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ borderColor: "#00000026" }} />
                <Grid sx={{ backgroundColor: "#fbfbfb", px: "16px", py: "15px" }}>
                  <Grid container justifyContent="space-evenly" gap={1}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        textDecoration: "underline",
                        textDecorationThickness: "3px",
                        textUnderlineOffset: "18px",
                        fontWeight: "600",
                      }}
                    >
                      Summary
                    </Typography>
                    <Typography sx={{ fontSize: "12px" }}>Order Lines</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Suppliers</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Analysis</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Freight Details</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Delivery</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Invoice</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Memos</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Notes & Attachments</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Budgets</Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ borderColor: "#00000026" }} />
                <Grid sx={{ backgroundColor: "#fbfbfb", p: "20px" }}>
                  <Grid
                    sx={{
                      backgroundColor: "#f0f0f0",
                      borderRadius: "5px",
                      px: "10px",
                      py: "10px",
                    }}
                  >
                    <Grid sx={{ display: "flex", gap: "2px" }}>
                      <Typography
                        sx={{ fontSize: "13.5px", fontWeight: "700", letterSpacing: "1px" }}
                      >
                        COMPONENTS
                      </Typography>
                      <Chip
                        label="0"
                        sx={{
                          height: "18px",
                          backgroundColor: "#ababab8a",
                          color: "black",
                          "& .MuiChip-label": {
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            paddingLeft: "6px",
                            paddingRight: "6px",
                            whiteSpace: "nowrap",
                          },
                        }}
                      />
                    </Grid>

                    <Grid sx={{ pt: "10px" }}>
                      <Typography sx={{ fontStyle: "italic" }}>No items found</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
