import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = () => {
  // manage the state of search input
  const [search, setSearch] = useState("");

  // add searchedExercises to state so that we can later display it
  const [exercises, setExercises] = useState([]);

  const [bodyParts, setBodyParts] = useState([]);
  // fetch categories as soon as the page loads
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  //handleSearch async function
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/",
        exerciseOptions
      );

      // filter exercise based on search term input
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );

      // clear the search
      setSearch("");

      // console.log(searchedExercises);
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack
      alignItems="center"
      mt="37px" // marginTop shorthand
      justifyContent="center"
      p="20px" //padding
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }} //lg- LargeDevices, xs- Extra Small Devices
        mb="50px" //marginBottom
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: {
              lg: "700px",
              xs: "350px",
            },
            backgroundColor: "#FFFF",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* Categories */}
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
