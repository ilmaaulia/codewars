const getGrade = (s1, s2, s3) => (average => (average >= 90 ? 'A' : average >= 80 ? 'B' : average >= 70 ? 'C' : average >= 60 ? 'D' : 'F'))((s1 + s2 + s3) / 3);
