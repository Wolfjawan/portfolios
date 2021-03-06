export const symbols =
  "ｦ1000011111110000000000000011111111111ﾊﾐﾋｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ";

export const shuffle = a => {
  return a.split("").sort(() => (Math.random() > 0.5 ? -1 : 1));
};
export const oppositeNumber = num => {
  if (10 <= num && num <= 12) return 66;
  if (12 <= num && num <= 14) return 62;
  if (14 <= num && num <= 16) return 58;
  if (16 <= num && num <= 18) return 54;
  if (18 <= num && num <= 20) return 50;
  if (20 <= num && num <= 22) return 46;
  if (22 <= num && num <= 24) return 42;
  if (24 <= num && num <= 26) return 38;
  if (26 <= num && num <= 28) return 34;
  if (28 <= num && num <= 30) return 30;
  if (30 <= num && num <= 32) return 26;
  if (32 <= num && num <= 34) return 22;
  if (34 <= num && num <= 36) return 18;
  if (36 <= num && num <= 38) return 14;
  if (38 <= num && num <= 40) return 10;
};
