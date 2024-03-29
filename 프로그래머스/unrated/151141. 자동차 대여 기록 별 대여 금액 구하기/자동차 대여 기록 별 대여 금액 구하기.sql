# -- 코드를 입력하세요
SELECT history.HISTORY_ID, TRUNCATE(car.DAILY_FEE * RENTAL_PERIOD * (IFNULL(100 - (SELECT MAX(DISCOUNT_RATE) FROM CAR_RENTAL_COMPANY_DISCOUNT_PLAN WHERE CAR_TYPE = car.CAR_TYPE AND CAST(duration_type AS UNSIGNED) < RENTAL_PERIOD),100)/100), 0) as FEE
FROM (SELECT HISTORY_ID, CAR_ID, DATEDIFF(end_date, start_date) + 1 as RENTAL_PERIOD FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY) history 
LEFT JOIN CAR_RENTAL_COMPANY_CAR car ON history.CAR_ID = car.CAR_ID 
WHERE car.CAR_TYPE = '트럭'
ORDER BY FEE DESC, history.HISTORY_ID DESC;