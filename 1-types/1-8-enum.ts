{
  /**
   * Enum
   */
  // javaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //TypeScript
  enum Days {
    Monday, // 0         // ex) Monday = 'monday' 도 가능
    Tuesday, // 1 
    wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Satarday, // 5
    Sunday, // 6
  }
  console.log(Days.Tuesday);
  const day = Days.Satarday;
  console.log(day);
}
