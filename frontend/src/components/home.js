import React from "react";
import styled from "styled-components";
import { FaUser, FaSearch } from "react-icons/fa";

const HomePage = () => {
  return (
    <Container>
      <Header>
        <GreetingContainer>
          <Greeting>Hi Mortal! <br /> <strong>Find Your Doctor</strong></Greeting>
        </GreetingContainer>
        <UserIcon>
          <FaUser size={24} />
        </UserIcon>
      </Header>

      <SearchContainer>
        <SearchInput placeholder="Search..." />
        <SearchIcon>
          <FaSearch />
        </SearchIcon>
      </SearchContainer>

      <CategoryContainer>
        <CategoryIcon color="#4f82e6">🦷</CategoryIcon>
        <CategoryIcon color="#34b34a">💊</CategoryIcon>
        <CategoryIcon color="#ff9e2c">👁️</CategoryIcon>
        <CategoryIcon color="#ff4c4c">🩺</CategoryIcon>
      </CategoryContainer>

      <SectionTitle>
        <h2>Popular Doctor</h2>
        <SeeAll>See all</SeeAll>
      </SectionTitle>

      <PopularDoctors>
        <DoctorCard>
          <DoctorImage src="doctor1.jpg" alt="Dr. Fillerup Grab" />
          <DoctorName>Dr. Fillerup Grab</DoctorName>
          <Specialty>Medicine Specialist</Specialty>
        </DoctorCard>
        <DoctorCard>
          <DoctorImage src="doctor2.jpg" alt="Dr. Blessing" />
          <DoctorName>Dr. Blessing</DoctorName>
          <Specialty>Dentist Specialist</Specialty>
        </DoctorCard>
      </PopularDoctors>

      <SectionTitle>
        <h2>Feature Doctor</h2>
        <SeeAll>See all</SeeAll>
      </SectionTitle>

      <FeaturedDoctors>
        <SmallDoctorCard>Dr. Varma</SmallDoctorCard>
        <SmallDoctorCard>Dr. Naresh</SmallDoctorCard>
        <SmallDoctorCard>Dr. Bhanu</SmallDoctorCard>
      </FeaturedDoctors>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  padding: 16px;
  background-color: #f5f5f5;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5f8de4;
  padding: 16px;
  border-radius: 8px;
  color: white;
`;

const GreetingContainer = styled.div`
  flex: 1;
`;

const Greeting = styled.h1`
  font-size: 18px;
  margin: 0;
  line-height: 1.4;
`;

const UserIcon = styled.div`
  background-color: #ffbd59;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-top: 16px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px;
  padding-right: 36px;
  border-radius: 24px;
  border: none;
  font-size: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #7d7d7d;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

const CategoryIcon = styled.div`
  background-color: ${(props) => props.color || "#eee"};
  color: white;
  padding: 16px;
  border-radius: 12px;
  font-size: 24px;
  text-align: center;
  width: 60px;
  height: 60px;
`;

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`;

const SeeAll = styled.span`
  color: #5f8de4;
  font-size: 14px;
`;

const PopularDoctors = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const DoctorCard = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  width: 45%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const DoctorImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const DoctorName = styled.h3`
  font-size: 16px;
  margin: 8px 0 4px;
`;

const Specialty = styled.p`
  font-size: 14px;
  color: gray;
`;

const FeaturedDoctors = styled.div`
  display: flex;
  gap: 8px;
`;

const SmallDoctorCard = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 8px;
  width: 25%;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export default HomePage;
